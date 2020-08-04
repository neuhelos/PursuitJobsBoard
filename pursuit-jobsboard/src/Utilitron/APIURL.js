export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3000" : "https://pursuitjobsboard.herokuapp.com/";
  };