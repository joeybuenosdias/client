import React from 'react';
import { connect } from 'react-redux';

/** components */
import { LineChart, Line, Tooltip } from 'recharts';
import { XAxisLabels } from './XAxisLabels/XAxisLabels';

/** styles */
import styles from './Chart.module.css';

export const Chart = ({
    sales
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Retail Sales</div>
            <div className={styles.chart}>
                <LineChart
                    width={1000}
                    height={600}
                    data={sales}
                >
                    <Tooltip
                        labelFormatter={value => `Week: ${value}`}
                        formatter={value => Number(value).toLocaleString()}
                    />
                    <Line
                        type="monotone"
                        dataKey="retailSales"
                        stroke="#0099ff"
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="wholesaleSales"
                        stroke="gray"
                        dot={false}
                    />
                </LineChart>
                <XAxisLabels />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    sales: state.app.sales
})

export default connect(mapStateToProps)(Chart);