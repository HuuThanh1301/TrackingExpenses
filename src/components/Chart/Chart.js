import classes from './Chart.module.css';

const ChartBar = (props) => {
  let barFill = '0%';
  if(props.max > 0){
    barFill = (props.value / props.max) * 100 + '%';
  }
  console.log('value', props.value);
  console.log('max', props.max)

  return(
    <div className={classes.wrap}>
      <div className={classes.container}>
        <div className={classes.fill} style={{height: barFill}}></div>
      </div>
      <label className={classes.label}>{props.label}</label>
    </div>
  )
}

const Chart = (props) => {
  const monthDataList = props.data;
  const expensesAmountList = monthDataList.map(item => item.value);
  const maxValue = Math.max(...expensesAmountList);
  
  return (
    <div className={classes.layout}>
      {monthDataList.map(item => <ChartBar key={item.label} label={item.label} value={item.value} max={maxValue}/>)}
    </div>
  );
}

export default Chart;