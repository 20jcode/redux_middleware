import { connect } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
    return (
        <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync} />
    );
}; //props 3개를 받아서 jsx 형식으로 리턴

export default connect(
    state => ({
        number: state.counter
    }),
    {
        increaseAsync,
        decreaseAsync
    }
)(CounterContainer); // redux store에 연결. 기존 state와 counter에서 export 된 action생성 함수를 넘겨주고, return 받은 함수에 CounterContainer를 파라미터로 전달.

