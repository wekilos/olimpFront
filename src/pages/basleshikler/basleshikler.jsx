import React, { useState, useEffect } from "react";
import { axiosInstance, BASE_URL } from "../../utils/axiosIntance";

const Basleshikler = () => {
    const [basleshikler, setBasleshikler] = useState([]);
    const [basleshik, setBasleshik] = useState();
    const [soragNo, setSoragNo] = useState(0);
    const [jogap, setJogap] = useState(0);
    const [start, setStart] = useState(true);
    const userData = JSON.parse(localStorage.getItem("userData"));

    useEffect(() => {
        getBasleshikler();
    }, []);
    const getBasleshikler = () => {
        axiosInstance
            .get("/api/basleshikler?active=true")
            .then((data) => {
                console.log(data.data);
                setBasleshikler(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getBasleshik = (id) => {
        setJogap(0);
        setStart(true);
        setSoragNo(0);
        axiosInstance
            .get("/api/basleshik/" + id)
            .then((data) => {
                console.log(data.data);
                setBasleshik(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const Jogapber = (item) => {
        if (soragNo < basleshik?.Sorags?.length - 1) {
            setSoragNo(soragNo + 1);
            item?.isTrue && setJogap(jogap + 1);
        } else {
            setStart(false);
            axiosInstance
                .post("/api/user_basleshik/create", {
                    score: jogap,
                    description: "description",
                    UserId: userData?.id,
                    BasleshikId: basleshik?.id,
                })
                .then((data) => {
                    console.log(data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    return (
        <div className="w-full flex justify-between min-h-[100vh]">
            <div className="w-[25%] bg-footerBack">
                <h1 className="bg-blue m-0 w-full h-[50px] leading-[50px] text-[24px] text-white   font-sans font-bold">
                    Basleshikler
                </h1>
                {basleshikler?.map((item) => {
                    return (
                        <div
                            onClick={() => getBasleshik(item.id)}
                            className="cursor-pointer w-full shadow-sm bg-white p-4 mb-1 rounded-[8px] hover:bg-aboutBack"
                        >
                            <h1 className="font-sans font-bold">
                                {item?.name}
                            </h1>
                            <p>{item?.description}</p>
                        </div>
                    );
                })}
            </div>
            <div className="w-[75%] bg-[#96d0fa1f]">
                <h1 className="bg-blue w-full h-[50px] leading-[50px] text-[24px] text-white   font-sans font-bold">
                    Soraglar
                </h1>
                <div>{basleshik?.name}</div>
                {basleshik && (
                    <div className="w-full flex justify-start ml-4">
                        Sorag No:{soragNo + 1} / {basleshik?.Sorags?.length}
                    </div>
                )}
                {basleshik && !start && (
                    <div className="w-full flex justify-start ml-4 font-bold">
                        Dogrylar :{jogap} / {basleshik?.Sorags?.length}
                    </div>
                )}
                {basleshik && start && (
                    <div className="w-full">
                        <h1 className="text-[20px]">
                            {basleshik?.Sorags[soragNo]?.sorag}
                        </h1>
                        <div className="w-full flex justify-center">
                            <img
                                className="object-contain h-[200px]"
                                src={
                                    BASE_URL +
                                    basleshik?.Sorags[soragNo]?.soragimg
                                }
                                alt="surat"
                            />
                        </div>

                        <div className="w-full flex justify-start mt-4 ml-4">
                            {basleshik?.Sorags[soragNo]?.Jogaps?.map((item) => {
                                return (
                                    <button
                                        onClick={() => Jogapber(item)}
                                        className="h-[30px] border-[1px] p-2 leading-[10px] text-[18px] rounded-[8px] mr-4"
                                    >
                                        {item?.jogap}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Basleshikler;
