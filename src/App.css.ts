import { createGlobalTheme, style } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
    color: {
        main: "#0ca4fc",
        mainDarker: "#0197ee",
        mainFaded: "#0ca4fc",
        mainFadedBright: "#0197ee",
        list: "rgb(245,250,254)",
        task: "rgb(255,255,255)",
        taskHover: "rgb(219, 236, 255)",
        brightText: "rgb(255,255,255)",
        darkText: "rgb(0,0,0)",
        secondaryDarkText: "rgb(22, 22, 22)",
        secondaryDarkTextHover: "rgb(226, 231, 235)",
        selectedTab: "#f4d238",
        updateButton: "rgb(64, 253, 77)",
        deleteButton: "rgb(253, 64, 64)"
    },
    fontSizing: {
        T1: "32px",
        T2: "24px",
        T3: "18px",
        T4: "14px",
        p1: "12px",
    },
    spacing: {
        small: "5px",
        medium: "10px",
        big1: "20px",
        big2: "15px",
        listSpacing: "30px"
    },
    font: {
        body: "arial"
    },
    shadow: {
        basic: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)"
    },
    minWidth: {
        list: '250px'
    }
}) 

export const appContainer = style({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: 'max-content',
    width: '100vw'
})

export const board = style({
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
})

export const buttons = style({
    marginTop: 'auto',
    paddingLeft: vars.spacing.big2
})

export const deleteBoardButton = style({
    border: "none",
    borderRadius: 5,
    width: "max-content",
    marginTop: "auto",
    marginLeft: "auto",
    marginBottom: 30,
    fontSize: vars.fontSizing.T4,
    padding: vars.spacing.big2,
    backgroundColor: vars.color.mainFaded,
    cursor: "pointer",
    opacity: 0.6,
    minWidth: 150,
    ":hover": {
        opacity: 0.8
    }
})

export const loggerButton = style({
    border: "none",
    borderRadius: 5,
    width: "max-content",
    marginTop: "auto",
    marginLeft: "15px",
    marginRight: "30px",
    marginBottom: "30px",
    fontSize: vars.fontSizing.T4,
    padding: vars.spacing.big2,
    backgroundColor: vars.color.mainFaded,
    cursor: "pointer",
    opacity: 0.6,
    minWidth: 150,
    ":hover": {
        opacity: 0.8
    }
})