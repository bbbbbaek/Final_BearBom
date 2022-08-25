import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

const ChatbotModule = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    // 부모 컴포넌트에서 사용할 함수를 선언
    boot,
  }));

  var w = window;
  if (w.ChannelIO) {
    return (window.console.error || window.console.log || function () {})(
      "ChannelIO script included twice."
    );
  }
  var ch = function () {
    ch.c(arguments);
  };
  ch.q = [];
  ch.c = function (args) {
    ch.q.push(args);
  };
  w.ChannelIO = ch;
  function l() {
    if (w.ChannelIOInitialized) {
      return;
    }
    w.ChannelIOInitialized = true;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  }
  if (document.readyState === "complete") {
    l();
  } else if (window.attachEvent) {
    window.attachEvent("onload", l);
  } else {
    window.addEventListener("DOMContentLoaded", l, false);
    window.addEventListener("load", l, false);
  }

  const boot = (settings) => {
    window.ChannelIO("boot", settings);
  };
});

const Chatbot = () => {
  const chatbotModule = useRef();
  useEffect(() => {
    chatbotModule.current.boot({
      pluginKey: "7fd40781-64a5-4a1b-9ad8-550eb68a68ea",
    });
  }, []);
  return <ChatbotModule ref={chatbotModule}></ChatbotModule>;
};

export default Chatbot;
