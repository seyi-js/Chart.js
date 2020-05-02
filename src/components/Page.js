import React from 'react'
import { Bar, Pie, Line, Doughnut } from 'react-chartjs-2'
const Page = ( { chartData, options } ) => {


    return (
        <React.Fragment>

            <div className='chart'>
                <Bar
                    data={ chartData }
                    options={options }
                />

                <Pie
                    data={ chartData }
                    options={ options  }
                />

                <Doughnut
                    data={ chartData }
                    options={  options  }
                />
            </div>
        </React.Fragment>

    )
}

export default Page

