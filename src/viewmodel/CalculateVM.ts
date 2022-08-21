import { useRef, useState } from "react"
import exportedSwal from "../utils/swal"


export default function CalculateVM() {

    const [title] = useState("การหาพื้นที่รูป N เหลี่ยมด้านเท่ามุมเท่าที่แนบในวงกลม")
    const [equat , setEquat ] = useState<Number>(0)
    const [answerShow , setAnswerShow ] = useState<Boolean>(false)
    const [answerText , setAnswerText ] = useState<String>("")
    const [proposition , setProposition] = useState<string>("")



    const ref_form = useRef<HTMLFormElement>(null);


    const actionCalculate = (event: React.ChangeEvent<HTMLInputElement>) => {

        ref_form.current?.reset()
        setAnswerShow(false)
        setAnswerText("")
        const data = event.target.value
        setEquat(Number(data))


    }

    const submitCalculate = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        //let data = {}

        if(equat === 0){
            exportedSwal.actionInfo(`กรุณาเลือกสูตรก่อน !`)
            return
        }

        if(equat === 1){

            if(
                formdata.get('eq_one_n') ===  "" || 
                formdata.get('eq_one_d') ===  "" ||
                formdata.get('eq_one_e') ===  "" ||
                formdata.get('eq_one_f') ===  ""
                ){
                    exportedSwal.actionInfo(`กรุณากรอกตัวแปรให้ครบในสูตรที่ 1 ก่อนกดคำนวณ !`)
                    return
            }


            let step1 = 0.125 *  parseFloat(formdata.get('eq_one_n')?.toString()!) // (0.125*n)
            let step2 = parseFloat(formdata.get('eq_one_d')?.toString()!) ** 2 + parseFloat(formdata.get('eq_one_e')?.toString()!) ** 2  - ( 4 * parseFloat(formdata.get('eq_one_f')?.toString()!) ) // (D^2 + E^2 - 4F)
            let step3 = Math.sin(( 360 / parseFloat(formdata.get('eq_one_n')?.toString()!) ) * (Math.PI / 180));
            let sum =  step1 * step2 * step3

            if(sum < 0){
                exportedSwal.actionInfo(`หาค่าไม่ได้ กรุณากรอกเลขใหม่`)
                return 
            }

            if(Number.isNaN(sum)){
                exportedSwal.actionInfo(`หาค่าไม่ได้ กรุณากรอกเลขใหม่`)
                return 
            }

            setProposition(`(0.125*${formdata.get('eq_one_n')})(${formdata.get('eq_one_d')}<sup>2</sup> + ${formdata.get('eq_one_e')}<sup>2</sup> -4(${formdata.get('eq_one_f')}))*sin( ( 360/${formdata.get('eq_one_n')} ) * (PI / 180)  )`)
            setAnswerText(sum.toFixed(2).toString())

        }

        if(equat === 2){

            if(
                formdata.get('eq_two_n') ===  "" || 
                formdata.get('eq_two_r') ===  ""
                ){
                    exportedSwal.actionInfo(`กรุณากรอกตัวแปรให้ครบในสูตรที่ 2 ก่อนกดคำนวณ !`)
                    return
            }

            let step1 = 0.5 * parseFloat(formdata.get('eq_two_n')?.toString()!)
            let step2 = parseFloat(formdata.get('eq_two_r')?.toString()!) ** 2
            let step3 = Math.sin(( 360 / parseFloat(formdata.get('eq_two_n')?.toString()!) ) * (Math.PI / 180));
            let sum =  step1 * step2 * step3

            if(sum < 0){
                exportedSwal.actionInfo(`หาค่าไม่ได้ กรุณากรอกเลขใหม่`)
                return 
            }

            if(Number.isNaN(sum)){
                exportedSwal.actionInfo(`หาค่าไม่ได้ กรุณากรอกเลขใหม่`)
                return 
            }



            setProposition(`(0.5*${formdata.get('eq_two_n')})(${formdata.get('eq_two_r')}<sup>2</sup>)*sin( ( 360/${formdata.get('eq_two_n')} )  * (PI / 180) )`)
            setAnswerText(sum.toFixed(2).toString())

        }

        setAnswerShow(true)

    }

    return {
        actionCalculate,
        submitCalculate,
        proposition,
        answerText,
        answerShow,
        ref_form,
        title,
        equat,
    }

}