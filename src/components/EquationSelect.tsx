import React from 'react'

type AppProps = {
    action_calculate : React.ChangeEventHandler<HTMLInputElement>;
}

function EquationSelect({ action_calculate }: AppProps) {
    return (
        <>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">เลือกสูตรสมการ</th>
                        <th scope="col">สูตรสมการ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><input onChange={action_calculate} type="radio" name='equation' value={1} /> </th>
                        <td> x<sup>2</sup> + y<sup>2</sup> + Dx + Ey + F = 0 </td>
                        {/* <td>(0.125*n)(D<sup>2</sup> +E<sup>2</sup> -4F)*sin( (360/n) * (PI / 180) )</td> */}
                    </tr>
                    <tr>
                        <th scope="row"><input onChange={action_calculate} type="radio" name='equation' value={2} /> </th>
                        <td>( x - h )<sup>2</sup> + ( y - k )<sup>2</sup> = r<sup>2</sup>  </td>
                        {/* <td>(0.5*n)(r<sup>2</sup>)*sin( (360/n) * (PI / 180) )</td> */}
                    </tr>
                </tbody>
            </table>

            <hr />

        </>
    )
}

export default EquationSelect