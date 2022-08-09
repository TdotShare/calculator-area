import EquationAnswer from '../../components/EquationAnswer'
import EquationInput from '../../components/EquationInput'
import EquationSelect from '../../components/EquationSelect'
import { HOST } from '../../config/host'
import CalculateVM from '../../viewmodel/CalculateVM'

function Calculate() {

    const viewModel = CalculateVM()

    return (
        <>

            <div className='container'>
                <div className='row'>
                    <div className='col' style={{ textAlign: 'center' }}>

                        <div style={{ marginTop: `10%` }}></div>


                        <div className="card text-center shadow ">
                            <div className="card-header">
                                <h4>{viewModel.title}</h4>
                            </div>
                            <div className="card-body" >

                                <EquationSelect action_calculate={viewModel.actionCalculate} />

                                <EquationInput
                                    equat={viewModel.equat}
                                    on_submit_form={viewModel.submitCalculate}
                                    ref_form={viewModel.ref_form}
                                />

                                <EquationAnswer proposition={viewModel.proposition} answer_text={viewModel.answerText} answer_show={viewModel.answerShow} />



                            </div>
                            <div className="card-footer">
                                  
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Calculate