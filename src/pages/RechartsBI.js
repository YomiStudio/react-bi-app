import React, { useContext, PureComponent } from 'react';
import { LoadDataContext } from '../assets/LoadDataContextProvider';
import { XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { BarChart, Bar } from 'recharts';

function RechartsBI() {
  const data = useContext(LoadDataContext);
  //const data = JSON.parse(localStorage.getItem('products'));
  console.log(data)
  const monthTickFormatter = (tick) => {
    const date = new Date(tick);
  
    return date.getMonth() + 1;
  };
  
  const renderQuarterTick = (tickProps) => {
    const { x, y, payload } = tickProps;
    const { value, offset } = payload;
    const date = new Date(value);
    const month = date.getMonth();
    const quarterNo = Math.floor(month / 3) + 1;
    const isMidMonth = month % 3 === 1;
  
    if (month % 3 === 1) {
      return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
    }
  
    const isLast = month === 11;
  
    if (month % 3 === 0 || isLast) {
      const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;
  
      return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
    }
    return null;
  };

  return (
    <div className='page-wrapper'>
      <h1>Welcome to my website!</h1>
      <p>This is the home page.</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            interval={0}
            tick={renderQuarterTick}
            height={1}
            scale="band"
            xAxisId="quarter"
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="QuantityOrdered" fill="#8884d8" />
          <Bar dataKey="UnitPrice" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="State" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="UnitPrice" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RechartsBI;