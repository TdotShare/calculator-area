import React from 'react'

type AppProps = {
    answer_show: Boolean;
}

function EquationAnswer({ answer_show }: AppProps) {
    return (
        <>

            {
                answer_show ?

                    <>
                        <div style={{ marginBottom: `2%` }}></div>

                        <p><b>ผลลัพธ์ : </b> พื้นที่รูปหลายเหลี่ยม = <span style={{ color: 'red' }}>0.00</span> ตร.น</p>

                    </>

                    :

                    <></>

            }

        </>
    )
}

export default EquationAnswer