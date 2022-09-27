package com.spring.bearbom.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.spring.bearbom.entity.CustomUserDetails;
import com.spring.bearbom.entity.User;
import com.spring.bearbom.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

//요청이 왔을 때 함께 전달해오는 token을 받아서 유효성 검사를 하고
//token 안에서 username을 꺼내서 사용하기 위한 필터
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
	@Autowired
	private JwtTokenProvider jwtTokenProvider;

	@Autowired
	private UserRepository userRepository;


	//안증된 사용자가 접근할수있는 페이지에 접근했을때 요청을 보냈을때 이 사람이 인증된 인가된 사용자인지 검사해주는 역할
	//스프링부트에서는 jwt token을 못쓰니까
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
			FilterChain filterChain) throws ServletException, IOException {
		try {

			//request에서 token 꺼내오기
			String token = parseBearerToken(request);
			//토큰 검사 및 시큐리티 등록
			if(token != null && !token.equalsIgnoreCase("null")) {
				//username 가져오기
				String username = jwtTokenProvider.validateAndGetUsername(token);

				User user = userRepository.findByUserId(username);

				CustomUserDetails customUserDetails = new CustomUserDetails(user);
				//유효성 검사된 토큰은 security에 등록
				//인증된 사용자로 설정
				//
//				AbstractAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
//						username, null, AuthorityUtils.NO_AUTHORITIES);

				AbstractAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
						username, null, customUserDetails.getAuthorities());

				System.out.println("///////////authority"+customUserDetails.getAuthorities());


				// new username , null, AuthorityUtils 3번째가 롤
				// 이 유저네임을 뽑아오면은 이 유저 네임으로 유저 엔티티 객체로

				authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
				securityContext.setAuthentication(authenticationToken);

//				Authentication test = securityContext.getAuthentication();
//				test.getCredentials();
				
				SecurityContextHolder.setContext(securityContext);
			}
		} catch(Exception e) {
			System.out.println("Could not set user authentication in security context" + e.getMessage());
		}
		
		filterChain.doFilter(request, response);
	}
	
	//요청 헤더를 파싱하여 Bearer 토큰을 리턴
	private String parseBearerToken(HttpServletRequest request) {
		String bearerToken = request.getHeader("Authorization");
		
		if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
			return bearerToken.substring(7);
		}
		
		return null;
	}
}
