import { Box, colors } from "@mui/material";

export default function Frame({ children, title, header, inactive, id }) {
    return (
        <Box
            sx={{
                borderRadius: 1,
                bgcolor: 'white',
                height: '100%',
            }}
        >
            <div style={styles.headContainer} id={id}>
                <div style={styles.dotContainer}>
                    <span style={{ ...styles.dot, ...styles.red }}></span>
                    <span style={{ ...styles.dot, ...styles.yellow }}></span>
                    <span style={{ ...styles.dot, ...styles.green }}></span>
                </div>
                { !header && <h3 style={styles.title} >{title}</h3>}
                <span style={{ width: "60px", display: "inline-block" }}></span>
            </div>
            {header && <h1 style={styles.header}>{title}</h1>}
            {!header && children}
        </Box>
    );
}

const styles = {
    headContainer: {
        width: '100%',
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "var(--font-chula-bold)"

    },
    dotContainer: {
        width: "60px",
    },
    title: {
        width: "max-content"
    },
    dot: {
        height: "10px",
        width: "10px",
        borderRadius: "50%",
        display: "inline-block",
        marginTop: "8px",
        marginLeft: "8px",
    },
    red: {
        backgroundColor: "#E24F45",
    },
    yellow: {
        backgroundColor: "#FCCA3B",
    },
    green: {
        backgroundColor: "#21D45A",
    },
    header: {
        textAlign: "center",
        fontFamily: "var(--font-chula-bold)",
        color: "var(--pink-main-color)"
    }
};
