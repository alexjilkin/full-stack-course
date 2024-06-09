export const Content = ({items}) => (items.map((item) => (
    <p key={item.part}>
        {item.part} {item.exercise}
    </p>
)))