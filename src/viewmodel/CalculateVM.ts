import { useRef, useState } from "react"


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

        let data = {}

        if(equat === 0){
            alert('กรุณาเลือกสูตรก่อน !')
            return
        }

        if(equat === 1){

            if(
                formdata.get('eq_one_n') ===  "" || 
                formdata.get('eq_one_d') ===  "" ||
                formdata.get('eq_one_e') ===  "" ||
                formdata.get('eq_one_f') ===  ""
                ){
                    alert('กรุณากรอกตัวแปรให้ครบในสูตรที่ 1 ก่อนกดคำนวณ !')
                    return
            }


            let step1 = 0.125 *  Number(formdata.get('eq_one_n')) // (0.125*n)
            let step2 = Number(formdata.get('eq_one_d')) ** 2 + Number(formdata.get('eq_one_e')) ** 2  - ( 4 * Number(formdata.get('eq_one_f')) ) // (D^2 + E^2 - 4F)
            let step3 = Math.sin(360 / Number(formdata.get('eq_one_n')));
            let sum =  step1 * step2 * step3

            if(sum < 0){
                alert('หาค่าไม่ได้ กรุณากรอกเลขใหม่')
                return 
            }

            if(Number.isNaN(sum)){
                alert('หาค่าไม่ได้ กรุณากรอกเลขใหม่')
                return 
            }

            setProposition(`(0.125*${formdata.get('eq_one_n')})(${formdata.get('eq_one_d')}<sup>2</sup> + ${formdata.get('eq_one_e')}<sup>2</sup> -4(${formdata.get('eq_one_f')}))*sin(360/${formdata.get('eq_one_n')})`)
            setAnswerText(sum.toFixed(2).toString())

        }

        if(equat === 2){

            if(
                formdata.get('eq_two_n') ===  "" || 
                formdata.get('eq_two_r') ===  ""
                ){
                    alert('กรุณากรอกตัวแปรให้ครบในสูตรที่ 2 ก่อนกดคำนวณ !')
                    return
            }

            let step1 = 0.5 * Number(formdata.get('eq_two_n'))
            let step2 = Number(formdata.get('eq_two_r')) ** 2
            let step3 = Math.sin(360 / Number(formdata.get('eq_two_n')));
            let sum =  step1 * step2 * step3

            if(sum < 0){
                alert('หาค่าไม่ได้ กรุณากรอกเลขใหม่')
                return 
            }

            if(Number.isNaN(sum)){
                alert('หาค่าไม่ได้ กรุณากรอกเลขใหม่')
                return 
            }



            setProposition(`(0.5*${formdata.get('eq_two_n')})(${formdata.get('eq_two_r')}<sup>2</sup>)*sin(360/${formdata.get('eq_two_n')})`)
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