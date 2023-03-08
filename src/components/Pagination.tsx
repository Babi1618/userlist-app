import { useCallback, useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRigth } from "../icons/ArrowRigth";
import { arrowDownSelectIcon } from "../icons/button-icons";
import { fetchTotalNumberOfElements } from "../utils/api";
import { CustomButton } from "./general/CustomButton";
import { CustomIcon } from "./general/CustomIcon";

export const Pagination = () => {
  const { page, setPage } = useAppContext() as any;
  const [responseLength, setResponseLength] = useState<number>(0);
  const [tens, setTens] = useState(0);

  const getTotalNumberOfElements = useCallback(async () => {
    const res = await fetchTotalNumberOfElements();
    setResponseLength(res ? res : 0);
  }, []);

  useEffect(() => {
    getTotalNumberOfElements();
  }, [getTotalNumberOfElements]);

  const tens_array = Array.from(
    { length: Math.ceil(responseLength / 10) },
    (_, i) => i
  );

  const handleClickAddPages = () => {
    if (tens <= Math.ceil(responseLength / 10)) {
      setTens(tens + 10);
    }
  };

  const handleClickRemovePages = () => {
    if (tens !== 0) {
      setTens(tens - 10);
    }
  };

  return (
    <>
      <div className="pagination">
        <div className="pagination-pages">
          <CustomButton
            className="arrow-left pagination-arrow"
            icon={ArrowLeft}
            iconWidth={24}
            iconColor="#7A8194"
            onClick={handleClickRemovePages}
          />
          <div className="pagination-buttons">
            {[...Array(10)].map((x, i) => {
              return (
                i + 1 + tens <= responseLength && (
                  <div
                    className={`pagination-number ${
                      page === i + 1 + tens ? "pagination-number-selected" : ""
                    }`}
                    key={i + 1}
                    onClick={() => setPage(() => i + 1 + tens)}
                  >
                    {i + 1 + tens}
                  </div>
                )
              );
            })}
          </div>
          <CustomButton
            className="arrow-rigth pagination-arrow"
            icon={ArrowRigth}
            iconWidth={24}
            iconColor="#7A8194"
            onClick={handleClickAddPages}
          />
        </div>

        <div
          className="custom-select pagination-select"
          onClick={() => console.log("click open select")}
        >
          <div>8{/* {responseLength} */}</div>
          <div>
            <CustomIcon icon={arrowDownSelectIcon} width={20} color="#2B2B40" />
          </div>
        </div>
      </div>
      <select
          className="pagination-select"
          onChange={(e) => {
            setTens(Number(e.target.value) * 10);
          }}
        >
          {tens_array.map((el: any) => {
            return (
              <option key={el} value={el}>
                {el}
              </option>
            );
          })}
        </select>
    </>
  );
};
