import { Styles, Theme } from '../../../../assets/global.styles'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	input: {
		height: 48,
		flexDirection: 'row',
		marginHorizontal: Styles.marginNPadding.sm,
		marginBottom: Styles.marginNPadding.lg,
		backgroundColor: Theme.neutral[100],
		borderRadius: Styles.radius.md,
	},
	textTitle: {
		fontSize: Styles.fontSize.lg,
		color: Theme.text[200],
		marginHorizontal: Styles.marginNPadding.sm,
	},
	list: {
		flexGrow: 0,
		height: 50,
	},
	chip: {
		backgroundColor: Theme.dominant[400],
		height: 32,
	},
	btn: {
		position: 'absolute',
		right: Styles.marginNPadding.sm,
		bottom: Styles.marginNPadding.sm,
	},
})
