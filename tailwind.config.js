/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          100: "#8e8e94",
          200: "rgba(0, 0, 0, 0.6)",
          300: "rgba(255, 255, 255, 0.2)",
        },
        aliceblue: "#f3f7fb",
        whitesmoke: "#eaeaea",
        orange: {
          100: "#fba403",
          200: "#f99a0e",
        },
        darkorange: "#dc880b",
        slategray: "#576074",
        darkslategray: {
          100: "#434343",
          200: "#424242",
          300: "#303030",
        },
        cornflowerblue: {
          100: "#4dabff",
          200: "#1262af",
          300: "#1262ae",
          400: "rgba(18, 98, 175, 0.05)",
        },
        lightgray: "#cecece",
        dimgray: {
          100: "#646468",
          200: "#57575d",
        },
        gainsboro: "rgba(226, 226, 226, 0.1)",
        lavender: "#ccdcec",
        darkgray: "#999",
        yellowgreen: "#79ca00",
        gold: "#fdbf00",
        sandybrown: "#ff9b53",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "baloo-bhai": "'Baloo Bhai'",
      },
      borderRadius: {
        "3xs": "10px",
        "8xl": "27px",
        "19xl": "38px",
        "12xl": "31px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      lg: "18px",
      mini: "15px",
      "11xl": "30px",
      sm: "14px",
      "3xl": "22px",
      "23xl": "42px",
      "13xl": "32px",
      "5xl": "24px",
      "2xl": "21px",
      smi: "13px",
      "42xl": "61px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "1100px",
      },
      sm: {
        max: "650px",
      },
      mq428small: {
        raw: "screen and (max-width: 428px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
