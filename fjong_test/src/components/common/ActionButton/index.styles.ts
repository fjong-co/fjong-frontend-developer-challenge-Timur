import { Styles, Theme } from '../../../../assets/global.styles'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flexGrow: 0,
		flexDirection: 'row',
		backgroundColor: Theme.accent[500],
		borderRadius: Styles.radius.md,
		// margin: Styles.marginNPadding.md,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		flex: 1,
		padding: Styles.marginNPadding.xs,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: Theme.text[100],
	},
	btnWrap: {
		padding: Styles.marginNPadding.md,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
