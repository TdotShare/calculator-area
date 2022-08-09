import { useRef, useState } from "react"


export default function CalculateVM() {

    const [title] = useState("การหาพื้นที่รูป N เหลี่ยมด้านเท่ามุมเท่าที่แนบในวงกลม")
    const [equat , setEquat ] = useState<Number>(0)
    const [answerShow , setAnswerShow ] = useState<Boolean>(false)

    

    const ref_form = useRef<HTMLFormElement>(null);


    const actionCalculate = (event: React.ChangeEvent<HTMLInputElement>) => {

        ref_form.current?.reset()
        setAnswerShow(false)
        const data = event.target.value
        setEquat(Number(data))


    }

    const submitCalculate = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        let data = {}

        if(equat === 0){
            alert('กรุณาเลือกสูตรก่อน !')
            return
        }

        if(equat === 1){

            if(
                formdata.get('eq_n') ===  "" || 
                formdata.get('eq_d') ===  "" ||
                formdata.get('eq_e') ===  "" ||
                formdata.get('eq_f') ===  ""
                ){
                    alert('กรุณากรอกตัวแปรให้ครบในสูตรที่ 1 ก่อนกดคำนวณ !')
                    return
            }

            data = {
                "eq_n" : formdata.get('eq_n'),
                "eq_d" : formdata.get('eq_d'),
                "eq_e" : formdata.get('eq_e'),
                "eq_f" : formdata.get('eq_f'),
            }
        }

        if(equat === 2){

            if(
                formdata.get('eq_h') ===  "" || 
                formdata.get('eq_k') ===  "" ||
                formdata.get('eq_r') ===  "" 
                ){
                    alert('กรุณากรอกตัวแปรให้ครบในสูตรที่ 2 ก่อนกดคำนวณ !')
                    return
            }

            data = {
                "eq_h" : formdata.get('eq_h'),
                "eq_k" : formdata.get('eq_k'),
                "eq_r" : formdata.get('eq_r'),
            }
        }

        setAnswerShow(true)

        console.log(data)

    }

    return {
        actionCalculate,
        submitCalculate,
        answerShow,
        ref_form,
        title,
        equat,
    }

}