import { connect } from 'react-redux';

import { Counter } from '../../components/Counter/counter';

const mapStateToProps = state => ({
  count: state.counterReducer.counter
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch({ type: 'INCREMENT' }),
  onDecrement: () => dispatch({ type: 'DECREMENT' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
