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
                                                <label >ค่า N</label>
                                                <input type="number" name='eq_n' className="form-control" />
                                            </div>
                                            <div className="form-group col-md">
                                                <label >ค่า D</label>
                                                <input type="number" name='eq_d' className="form-control" />
                                            </div>
                                            <div className="form-group col-md">
                                                <label >ค่า E</label>
                                                <input type="number" name='eq_e' className="form-control" />
                                            </div>
                                            <div className="form-group col-md">
                                                <label >ค่า F</label>
                                                <input type="number" name='eq_f' className="form-control" />
                                            </div>
                                        </div>
                                    </>

                                    :

                                    <>

                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <label >ค่า H</label>
                                                <input type="number" name='eq_h' className="form-control" />
                                            </div>
                                            <div className="form-group col-md">
                                                <label >ค่า K</label>
                                                <input type="number" name='eq_k' className="form-control" />
                                            </div>
                                            <div className="form-group col-md">
                                                <label >ค่า R</label>
                                                <input type="number" name='eq_r' className="form-control" />
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