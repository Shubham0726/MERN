 function RoundRobin(total, current) {
    return (current < total - 1) ? (current + 1) : 0;
    }
export default RoundRobin;