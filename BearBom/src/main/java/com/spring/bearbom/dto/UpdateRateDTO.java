package com.spring.bearbom.dto;


public class UpdateRateDTO {

	private int courserIdx;
	
	private double ratingAvg;
	
	public int getCourseIdx() {
		return courserIdx;
	}
	
	public void setCourserIdx(int courserIdx) {
		this.courserIdx = courserIdx;
	}
	
	public double getRatingAvg() {
		return ratingAvg;
	}
	
	public void setRatingAvg(double ratingAvg) {
		this.ratingAvg = ratingAvg;
	}
	
	@Override
	public String toString() {
		return "UpdateRateDTO [courseIdx=" + courserIdx + ", ratingAvg=" + ratingAvg + "]";
	}
}
