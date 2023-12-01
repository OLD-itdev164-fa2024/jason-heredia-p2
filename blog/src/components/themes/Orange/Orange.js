import { withTheme } from "styled-components"

const theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    colors: {
        oranges: {
            0: 'hsl(340, 70%, 100%)',
            1: 'hsl(340, 70%, 95%)',
            2: 'hsl(340, 70%, 85%)',
            3: 'hsl(340, 70%, 75%)',
            4: 'hsl(340, 70%, 65%)',
            5: 'hsl(340, 70%, 55%)',
            6: 'hsl(340, 70%, 45%)',
            7: 'hsl(340, 70%, 35%)',
            8: 'hsl(340, 70%, 25%)',
            9: 'hsl(340, 70%, 15%)',
            10:'hsl(340, 70%, 5%)',
        }
    }
}

const variants = {
    iconButton: {
        primary: {
            color: theme.colors.oranges[8]
        },
        contrast: {
            color: theme.colors.oranges[0]
        }
    },
    header: {
        primary: {
            backgroundColor: theme.colors.oranges[8]
        }
    }
}

export const Orange = {...theme,variants}