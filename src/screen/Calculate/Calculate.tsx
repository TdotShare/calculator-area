import EquationAnswer from '../../components/EquationAnswer'
import EquationInput from '../../components/EquationInput'
import EquationSelect from '../../components/EquationSelect'
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

                                <EquationSelect action_calculate={viewModel.actionCalculate} />

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