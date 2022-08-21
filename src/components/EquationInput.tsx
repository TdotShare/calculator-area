import React from 'react'

type AppProps = {
    ref_form: React.LegacyRef<HTMLFormElement>;
    on_submit_form: React.FormEventHandler<HTMLFormElement>;
    equat: Number;
}

function EquationInput({ equat, ref_form, on_submit_form }: AppProps) {
    return (
        <>

            {
                equat === 0 ?

                    <></>

                    :

                    <>

                        <form ref={ref_form} onSubmit={on_submit_form} >

                            {
                                equat === 1 ?

                                    <>


                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <label >ค่า n</label>
                                                <input type="number" name='eq_one_n' step={`0.01`} className="form-control" />
                                            </div>
                                            <div className="form-group col-md">
                                                <label >ค่า D</label>
                                                <input type="number" name='eq_one_d' step={`0.01`} className="form-control" />
                                            </div>
                                            <div className="form-group col-md">
                                                <label >ค่า E</label>
                                                <input type="number" name='eq_one_e' step={`0.01`} className="form-control" />
                                            </div>
                                            <div className="form-group col-md">
                                                <label >ค่า F</label>
                                                <input type="number" name='eq_one_f' step={`0.01`} className="form-control" />
                                            </div>
                                        </div>
                                    </>

                                    :

                                    <>

                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <label >ค่า n</label>
                                                <input type="number" name='eq_two_n' step={`0.01`} className="form-control" />
                                            </div>
                                            <div className="form-group col-md">
                                                <label >ค่า r</label>
                                                <input type="number" name='eq_two_r' step={`0.01`} className="form-control" />
                                            </div>
                                        </div>

                                    </>
                            }

                            <button className='btn btn-success btn-block'>คำนวณ</button>

                        </form>

                    </>

            }


        </>
    )
}

export default EquationInput