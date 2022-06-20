import { Styles, Theme } from '../../../../assets/global.styles'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0,
		top: 0,
		zIndex: 10,
		backgroundColor: Theme.dominant[500],
		justifyContent: 'center',
		alignItems: 'center',
	},
	Text: {
		color: Theme.text[100],
		fontSize: Styles.fontSize.lg,
	},
	ErrorText: {
		color: Theme.accent[500],
		fontSize: Styles.fontSize.xxl,
	},
	button: {
		marginTop: Styles.marginNPadding.md,
		backgroundColor: Theme.accent[500],
		padding: Styles.marginNPadding.md,
		paddingVertical: Styles.marginNPadding.sm,
		borderRadius: Styles.radius.md,
	},
})
