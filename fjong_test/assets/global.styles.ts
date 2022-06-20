export const Theme = {
    accent: {
        500: '#EC9192',
    },
    dominant: {
        500: '#242423',
        400: '#343432',
    },
    secondary: {
        500: '#F5CB5C',
    },
    text: {
        100: '#E8EDDF',
        200: '#CFDBD5',
    },
    shadow: '#000000',
    neutral: {
        100: '#FFFFFF',
        900: '#000000',
    }
}

export const Styles = {
    marginNPadding: {
        xs: 5,
        sm: 10,
        md: 15,
        lg: 20,
        xl: 25,
        xxl: 30,
    },
    radius: {
        xs: 8,
        sm: 10,
        md: 12,
        lg: 14,
        xl: 16,
        xxl: 18,
    },
    fontSize: {
        xs: 10,
        sm: 12,
        md: 14,
        lg: 16,
        xl: 18,
        xxl: 20,
    }
}

export const NavigatorTheme = {
	dark: false,
	colors: {
		primary: Theme.accent[500],
		background: Theme.dominant[500],
		card: Theme.dominant[500],
		text: Theme.text[100],
		border: Theme.dominant[500],
		notification: Theme.accent[500],
	},
}