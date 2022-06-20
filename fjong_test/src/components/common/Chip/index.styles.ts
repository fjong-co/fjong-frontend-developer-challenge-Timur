import { Styles, Theme } from '../../../../assets/global.styles'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flexGrow: 0,
		backgroundColor: Theme.dominant[500],
		borderRadius: Styles.radius.sm,
		margin: Styles.marginNPadding.xs,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: Styles.marginNPadding.sm,
		PaddingVertical: Styles.marginNPadding.xs,
	},
	text: {
		color: Theme.text[100],
	},
})
