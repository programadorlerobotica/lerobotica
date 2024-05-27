import React from "react";
import { useEffect, useState } from "react";
import MultiSelect from "../MultiSelect/page";

const FilterLessons = (props) => {
  const {
    selectedProducts,
    setSelectedProducts,
    selectedEtapas,
    setSelectedEtapas,
    filter1,
    filter2,
  } = props;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 44);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-[#f5f5f5] lg:px-24 w-full h-12 py-1 flex gap-6 font-[cerapro] z-50 ${isScrolled ? "fixed top-0" : ""}`}
      style={{
        background: "#f5f5f5",
        top: "60px",
        width: "100%",
      }}
    >
      <div className="z-40">
        <MultiSelect
          data={filter1}
          placeHolder={"Productos"}
          state={selectedProducts}
          seter={setSelectedProducts}
        />
      </div>
      <div className="z-40">
        <MultiSelect
          data={filter2}
          placeHolder={"Etapa"}
          state={selectedEtapas}
          seter={setSelectedEtapas}
        />
      </div>
    </div>
  );
};

export default FilterLessons;
