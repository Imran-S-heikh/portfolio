import jsPDF from "jspdf";
import React, { useRef } from 'react'
import Button from "../../molecules/Buttons.mole";

type Props = {}

function CurriculumVitae({ }: Props) {

    const cv = useRef<HTMLDivElement | null>(null);

    const generatePDF = () => {

        if (cv.current) {
            const report = new jsPDF('portrait', 'px', 'a4');

            report.html(cv.current,{
                callback: report => report.save('imran-shaikh-cv.pdf'),
                html2canvas: { scale: 1 }
            },)
        }
    }

    return (
        <div className="flex h-full">
            <div className="w-60 border-gray-base border-r p-4 ">
                <Button.Default onClick={generatePDF} label="Export CV" className="w-full" />
            </div>
            <div className=" flex-1 ">
                <div className=" bg-black-base">
                    <div ref={cv} className="w-[450px] bg-white-base cv-root ">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurriculumVitae