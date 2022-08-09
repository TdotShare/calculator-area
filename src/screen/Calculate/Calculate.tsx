import EquationAnswer from '../../components/EquationAnswer'
import EquationInput from '../../components/EquationInput'
import CalculateVM from '../../viewmodel/CalculateVM'

function Calculate() {

    const viewModel = CalculateVM()

    return (
        <>

            <div className='container'>
                <div className='row'>
                    <div className='col' style={{ textAlign: 'center' }}>

                        <div style={{ marginTop: `10%` }}></div>

                        <div className="card text-center">
                            <div className="card-header">
                                <h5>{viewModel.title}</h5>
                            </div>
                            <div className="card-body" >

                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">เลือกสูตรสมการ</th>
                                            <th scope="col">สูตรสมการ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><input onChange={viewModel.actionCalculate} type="radio" name='equation' value={1} /> </th>
                                            <td> x<sup>2</sup> + y<sup>2</sup> + Dx + Ey + F = 0 </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input onChange={viewModel.actionCalculate} type="radio" name='equation' value={2} /> </th>
                                            <td>( x - h )<sup>2</sup> + ( y - k )<sup>2</sup> = r<sup>2</sup>  </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <hr />

                                <EquationInput 
                                equat={viewModel.equat}
                                on_submit_form={viewModel.submitCalculate}
                                ref_form={viewModel.ref_form}
                                />

                                <EquationAnswer answer_show={viewModel.answerShow} />



                            </div>
                            <div className="card-footer text-muted">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Calculate