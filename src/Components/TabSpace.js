export default function TabSpace({ width = 20, br }) {
    return (
        <>
            {br && <br />}
            <span style={{ display: 'inline-block', width: `${width}px` }} />
        </>
    );
}