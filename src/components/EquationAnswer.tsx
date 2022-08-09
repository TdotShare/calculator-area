import React from 'react'
import parse from 'html-react-parser';

type AppProps = {
    answer_show: Boolean;
    answer_text: String;
    proposition: string;
}

function EquationAnswer({ answer_show , answer_text , proposition }: AppProps) {
    return (
        <>

            {
                answer_show ?

                    <>
                        <div style={{ marginBottom: `2%` }}></div>

                        <p><b>โจทย์ที่ตั้ง : </b> {parse(proposition)}</p>
                        <p><b>ผลลัพธ์ : </b> พื้นที่รูปหลายเหลี่ยม = <span style={{ color: 'red' }}>{answer_text}</span> ตร.น</p>

                    </>

                    :

                    <></>

            }

        </>
    )
}

export default EquationAnswer