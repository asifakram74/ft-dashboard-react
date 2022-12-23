import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';

import { Stack, Animation } from '@devexpress/dx-react-chart';

import { dailyScreenTime as data } from './data-vizualization';

const Root = props => (
  <Legend.Root
    {...props}
    style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      margin: 'auto',
    }}
  />
);


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
              name="Social"
              valueField="hydro"
              argumentField="hourly"
            />
            <BarSeries
              name="Entertainment"
              valueField="oil"
              argumentField="hourly"
            />
            <BarSeries
              name="Productivity"
              valueField="gas"
              argumentField="hourly"
            />
           
          <Animation />
          <Legend position="bottom" rootComponent={Root} />
          {/* <Title text="Population: Age Structure" /> */}
          <Stack
            stacks={[
              
              { series: ['Female: 0-14', 'Female: 15-64', 'Female: 65 and older'] },
            ]}
          />
        </Chart>
      </Paper>
    );
  }
}
