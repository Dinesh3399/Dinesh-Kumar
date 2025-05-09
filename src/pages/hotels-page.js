import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import MatterhornPopup from "../components/matterhorn-popup";
import PortalPopup from "../components/portal-popup";
import { useNavigate } from "react-router-dom";

const HotelsPage = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onWebScreenClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  return (
    <>
      <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-lg text-white font-roboto">
        <header className="self-stretch bg-white h-[77px] flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] text-left text-sm text-darkslategray-200 font-roboto lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
          <div className="flex-1 flex flex-row items-center justify-between">
            <div
              className="relative w-[174px] h-[33px] overflow-hidden cursor-pointer"
              onClick={onFickleflightLogoContainerClick}
            >
              <div className="absolute h-[96.97%] w-[99.82%] top-[1.59%] right-[0.18%] bottom-[1.44%] left-[0%]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
                  alt=""
                  src="/webscreen.svg"
                  onClick={onWebScreenClick}
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
              <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
                <div
                  className="relative cursor-pointer"
                  onClick={onExploreTextClick}
                >
                  Explore
                </div>
                <div
                  className="relative cursor-pointer"
                  onClick={onSearchTextClick}
                >
                  Search
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-roboto text-cornflowerblue-200 text-left inline-block">
                  Hotels
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-roboto text-darkslategray-200 text-left inline-block">
                  Offers
                </button>
              </div>
              <div className="flex flex-row items-center justify-center gap-[12px]">
                <img
                  className="relative w-6 h-6 overflow-hidden hidden md:flex"
                  alt=""
                  src="/notification.svg"
                />
                <img
                  className="relative w-6 h-6 overflow-hidden"
                  alt=""
                  src="/notification1.svg"
                />
                <img
                  className="rounded-19xl w-9 h-9 object-cover"
                  alt=""
                  src="/top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="self-stretch flex flex-col items-start justify-start text-23xl font-baloo-bhai">
          <div className="self-stretch relative [background:linear-gradient(100.3deg,_#0b5ba8,_#299bd8)] h-[193px] lg:py-[21px] lg:pr-10 lg:pl-[41px] lg:box-border md:py-[21px] md:px-6 md:box-border">
            <img
              className="absolute h-[calc(100%_-_0.4px)] w-full top-[0.4px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/banner-background@2x.png"
            />
            <div className="absolute top-[50px] left-[0px] w-[1440px] flex flex-col items-start justify-start py-0 px-20 box-border gap-[8px] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
              <div className="relative tracking-[0.02em] leading-[48px] inline-block w-[1280px] sm:text-13xl">
                Stays in Los Angeles
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-center text-base font-roboto">
                <div className="rounded-8xl bg-white flex flex-row items-center justify-center py-[11px] px-[21px] text-cornflowerblue-200 border-[1px] border-solid border-white">
                  <div className="relative tracking-[0.04em] capitalize font-medium sm:text-sm">
                    Recommended
                  </div>
                </div>
                <div className="rounded-8xl flex flex-row items-center justify-center py-[11px] px-[21px] border-[1px] border-solid border-white">
                  <div className="relative tracking-[0.04em] capitalize font-medium sm:text-sm">
                    Price
                  </div>
                </div>
                <div className="rounded-8xl flex flex-row items-center justify-center py-[11px] px-[21px] border-[1px] border-solid border-white">
                  <div className="relative tracking-[0.04em] capitalize font-medium sm:text-sm">
                    Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-[50px] px-20 gap-[20px] text-darkslategray-300 lg:p-10 lg:box-border md:py-[30px] md:px-6 md:box-border">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex-1 relative tracking-[0.04em] uppercase font-medium">
              200+ results
            </div>
            <div className="relative w-[86px] h-6 text-base">
              <img
                className="absolute top-[0px] left-[62px] w-6 h-6 overflow-hidden"
                alt=""
                src="/filters.svg"
              />
              <div className="absolute top-[2.5px] left-[0px] tracking-[0.04em]">
                Filters
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[23px] text-base text-gray-100">
            <div className="w-[561.87px] flex flex-col items-start justify-start gap-[12px] md:w-[100%!important] sm:gap-[20px]">
              <div className="self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[16px] sm:flex-col">
                <img
                  className="relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[260px] h-[220px] object-cover sm:w-[100%!important] sm:rounded-[10px!important]"
                  alt=""
                  src="/results-image@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start py-[15px] pr-3 pl-0 gap-[31px] sm:w-full sm:p-[15px] sm:box-border sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative tracking-[0.02em] inline-block w-[146.92px]">
                        1 king bed standard
                      </div>
                      <b className="relative text-3xl tracking-[0.04em] capitalize inline-block text-darkslategray-300 w-[232.87px]">
                        Holiday Inn Expre...
                      </b>
                      <div className="relative w-[173.91px] h-[19px] text-cornflowerblue-200">
                        <div className="absolute top-[0px] left-[55.97px] tracking-[0.04em] inline-block w-[117.94px]">
                          (1,136 reviews)
                        </div>
                        <div className="absolute top-[0px] left-[0px] w-[45.98px] h-[19px] text-darkslategray-300">
                          <div className="absolute top-[0px] left-[21.99px] tracking-[0.04em] font-medium inline-block w-[23.99px]">
                            4.7
                          </div>
                          <img
                            className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="relative w-6 h-6 overflow-hidden cursor-pointer"
                      alt=""
                      src="/video.svg"
                      onClick={openMatterhornPopup}
                    />
                  </div>
                  <div className="relative w-[164.49px] h-[83.58px] text-3xl text-darkslategray-300">
                    <div className="absolute top-[0px] left-[0px] w-28 h-[26px]">
                      <b className="absolute top-[0px] left-[0px] tracking-[0.02em] capitalize">
                        $S 286
                      </b>
                      <div className="absolute top-[8px] left-[73px] text-sm tracking-[0.02em]">
                        /night
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200" />
                      <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-lg tracking-[0.04em] font-medium font-roboto text-white text-center">
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[16px] text-darkslategray-300 sm:flex-col">
                <img
                  className="relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[260px] h-[220px] object-cover sm:w-[100%!important] sm:rounded-[10px!important]"
                  alt=""
                  src="/results-image@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start py-[15px] pr-3 pl-0 gap-[31px] sm:p-[15px] sm:box-border sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative h-[76px]">
                      <b className="absolute top-[25px] left-[0px] text-3xl tracking-[0.04em] capitalize inline-block w-[273.87px]">
                        Freehand Los Angeles
                      </b>
                      <div className="absolute top-[0px] left-[0px] tracking-[0.02em] text-gray-100 inline-block w-[172.79px]">
                        Bed in Quad
                      </div>
                      <div className="absolute top-[57px] left-[0px] w-[202.77px] h-[19px] text-cornflowerblue-200">
                        <div className="absolute top-[0px] left-[64.07px] tracking-[0.04em] inline-block w-[138.7px]">
                          (1,941 reviews)
                        </div>
                        <div className="absolute top-[0px] left-[0px] w-[54.07px] h-[19px] text-darkslategray-300">
                          <div className="absolute top-[0px] left-[25.86px] tracking-[0.04em] font-medium inline-block w-[28.21px]">
                            4.2
                          </div>
                          <img
                            className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[164.49px] h-[83.58px] text-3xl">
                    <div className="absolute top-[0px] left-[0px] w-28 h-[26px]">
                      <b className="absolute top-[0px] left-[0px] tracking-[0.02em] capitalize">
                        $S 198
                      </b>
                      <div className="absolute top-[8px] left-[73px] text-sm tracking-[0.02em]">
                        /night
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200" />
                      <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-lg tracking-[0.04em] font-medium font-roboto text-white text-center">
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[16px] text-darkslategray-300 sm:flex-col">
                <img
                  className="relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[260px] h-[220px] object-cover sm:w-[100%!important] sm:rounded-[10px!important]"
                  alt=""
                  src="/results-image@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start py-[15px] pr-3 pl-0 gap-[31px] sm:p-[15px] sm:box-border sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative h-[76px]">
                      <b className="absolute top-[25px] left-[0px] text-3xl tracking-[0.04em] capitalize inline-block w-[273.87px]">
                        The Westin Bonavent...
                      </b>
                      <div className="absolute top-[0px] left-[0px] tracking-[0.02em] text-gray-100 inline-block w-[172.79px]">
                        1 King, City view
                      </div>
                      <div className="absolute top-[57px] left-[0px] w-[202.77px] h-[19px] text-cornflowerblue-200">
                        <div className="absolute top-[0px] left-[64.07px] tracking-[0.04em] inline-block w-[138.7px]">
                          (1,002 reviews)
                        </div>
                        <div className="absolute top-[0px] left-[0px] w-[54.07px] h-[19px] text-darkslategray-300">
                          <div className="absolute top-[0px] left-[25.86px] tracking-[0.04em] font-medium inline-block w-[28.21px]">
                            4.1
                          </div>
                          <img
                            className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[164.49px] h-[83.58px] text-3xl">
                    <div className="absolute top-[0px] left-[0px] w-28 h-[26px]">
                      <b className="absolute top-[0px] left-[0px] tracking-[0.02em] capitalize">
                        $S 289
                      </b>
                      <div className="absolute top-[8px] left-[73px] text-sm tracking-[0.02em]">
                        /night
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200" />
                      <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-lg tracking-[0.04em] font-medium font-roboto text-white text-center">
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[16px] sm:flex-col">
                <img
                  className="relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[260px] h-[220px] object-cover sm:w-[100%!important] sm:rounded-[10px!important]"
                  alt=""
                  src="/results-image@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start py-[15px] pr-3 pl-0 gap-[31px] sm:w-full sm:p-[15px] sm:box-border sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative tracking-[0.02em] inline-block w-[146.92px]">
                        Deluxe King
                      </div>
                      <b className="relative text-3xl tracking-[0.04em] capitalize inline-block text-darkslategray-300 w-[232.87px]">
                        The Ritz-Carlton, L...
                      </b>
                      <div className="relative w-[173.91px] h-[19px] text-cornflowerblue-200">
                        <div className="absolute top-[0px] left-[55.97px] tracking-[0.04em] inline-block w-[117.94px]">
                          (1,136 reviews)
                        </div>
                        <div className="absolute top-[0px] left-[0px] w-[45.98px] h-[19px] text-darkslategray-300">
                          <div className="absolute top-[0px] left-[21.99px] tracking-[0.04em] font-medium inline-block w-[23.99px]">
                            4.7
                          </div>
                          <img
                            className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="relative w-6 h-6 overflow-hidden cursor-pointer"
                      alt=""
                      src="/feature-video.svg"
                      onClick={openMatterhornPopup1}
                    />
                  </div>
                  <div className="relative w-[164.49px] h-[83.58px] text-3xl text-darkslategray-300">
                    <div className="absolute top-[0px] left-[0px] w-28 h-[26px]">
                      <b className="absolute top-[0px] left-[0px] tracking-[0.02em] capitalize">
                        $S 286
                      </b>
                      <div className="absolute top-[8px] left-[73px] text-sm tracking-[0.02em]">
                        /night
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200" />
                      <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-lg tracking-[0.04em] font-medium font-roboto text-white text-center">
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <iframe
                className="[border:none] self-stretch relative h-[600px] hidden md:flex md:max-w-[1000px]"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
              />
            </div>
            <iframe
              className="[border:none] self-stretch flex-1 relative md:hidden"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-center text-cornflowerblue-300">
          <div className="self-stretch relative bg-aliceblue h-[529px] overflow-hidden">
            <img
              className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[530px] object-cover"
              alt=""
              src="/newsletter-section-background@2x.png"
            />
            <div className="[position:relative!important] top-[52px] left-[auto!important] w-[549px] flex flex-col items-center justify-start p-5 box-border gap-[30px] ml-[auto] mr-[auto] md:py-6 md:px-0 md:box-border sm:pl-6 sm:pr-6 sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
              <div className="self-stretch flex flex-col items-center justify-start gap-[7px]">
                <b className="self-stretch relative tracking-[0.04em] uppercase">
                  subscribe to our newsletter
                </b>
                <b className="self-stretch relative text-11xl text-darkslategray-100">
                  Get weekly updates
                </b>
              </div>
              <div className="self-stretch rounded-xl bg-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col items-start justify-start py-7 px-[30px] gap-[17px] text-left text-slategray border-[1px] border-solid border-whitesmoke">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[34px]">
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch font-roboto text-base text-gray-200"
                      color="primary"
                      label="Your name"
                      size="medium"
                      variant="outlined"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch font-roboto text-base text-gray-200"
                      color="primary"
                      label="Email address"
                      size="medium"
                      variant="outlined"
                      type="text"
                    />
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[164px] h-14 overflow-hidden flex flex-col items-center justify-center hover:bg-darkorange sm:w-full sm:hover:bg-orange-200">
                  <div className="overflow-hidden flex flex-col items-start justify-start py-2 px-[22px]">
                    <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-white text-left">
                      submit
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row items-start justify-start py-[33px] px-[84px] gap-[44px] text-left text-lg text-white font-roboto lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] mb-[40px!important] md:flex-[unset] md:self-stretch">
              <img
                className="relative w-[174px] h-[33px] overflow-hidden"
                alt=""
                src="/logo.svg"
              />
              <div className="self-stretch relative leading-[27px]">
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className="relative w-[130px] h-[30px]"
                alt=""
                src="/social-icons.svg"
              />
            </div>
            <div className="relative box-border w-px h-[157.87px] border-r-[1px] border-solid border-gray-300 md:hidden" />
            <div className="flex-1 flex flex-row items-start justify-between text-base md:flex-[unset] md:self-stretch sm:flex-col">
              <div className="relative w-[197.33px] h-[159.76px] sm:mb-[40px!important]">
                <div className="absolute top-[47.76px] left-[0px] inline-block w-[135.67px]">
                  About Us
                </div>
                <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[174.72px]">
                  Company
                </div>
                <div className="absolute top-[78.76px] left-[0px] inline-block w-[84.28px]">
                  News
                </div>
                <div className="absolute top-[109.76px] left-[0px] inline-block w-[115.11px]">
                  Careers
                </div>
                <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.33px]">
                  How we work
                </div>
              </div>
              <div className="relative w-[197.33px] h-[159.76px] sm:mb-[40px!important]">
                <div className="absolute top-[47.76px] left-[0px] inline-block w-[109.63px]">
                  Account
                </div>
                <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[131.56px]">
                  Support
                </div>
                <div className="absolute top-[78.76px] left-[0px] inline-block w-[197.33px]">
                  Support Center
                </div>
                <div className="absolute top-[109.76px] left-[0px] inline-block w-[52.99px]">
                  FAQ
                </div>
                <div className="absolute top-[140.76px] left-[0px] inline-block w-[164.44px]">
                  Accessibility
                </div>
              </div>
              <div className="relative w-[197.33px] h-[159.76px]">
                <div className="absolute top-[47.76px] left-[0px] inline-block w-[172.87px]">
                  Covid Advisory
                </div>
                <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[76.65px]">
                  More
                </div>
                <div className="absolute top-[78.76px] left-[0px] inline-block w-[135.36px]">
                  Airline Fees
                </div>
                <div className="absolute top-[109.76px] left-[0px] inline-block w-[50.56px]">
                  Tips
                </div>
                <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.33px]">
                  Quarantine Rules
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
      {isMatterhornPopup1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup1}
        >
          <MatterhornPopup onClose={closeMatterhornPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelsPage;
