import { Styles, Theme } from '../../../../assets/global.styles'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexGrow: 1,
		flexDirection: 'row',
		backgroundColor: Theme.neutral[100],
		borderRadius: Styles.radius.md,
		// marginLeft: Styles.marginNPadding.sm,
		justifyContent: 'center',
		alignItems: 'center',
		PaddingVertical: Styles.marginNPadding.md,
	},
	input: {
		flex: 1,
		padding: Styles.marginNPadding.xs,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: Styles.marginNPadding.sm,
	},
	text: {
		color: Theme.text[100],
	},
	searchWrap: {
		// position: 'absolute',
		top: 0,
		right: Styles.marginNPadding.sm,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
