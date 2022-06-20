import { Styles, Theme } from '../../../../assets/global.styles'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	searchBar: {
		height: 48,
		flexDirection: 'row',
		marginHorizontal: Styles.marginNPadding.sm,
		marginBottom: Styles.marginNPadding.lg,
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
})
