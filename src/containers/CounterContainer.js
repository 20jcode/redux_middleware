import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
}; //props 3개를 받아서 jsx 형식으로 리턴

export default connect(
    state => ({
        number: state.counter
    }),
    {
        increase,
        decrease
    }
)(CounterContainer); // redux store에 연결. 기존 state와 counter에서 export 된 action생성 함수를 넘겨주고, return 받은 함수에 CounterContainer를 파라미터로 전달.

