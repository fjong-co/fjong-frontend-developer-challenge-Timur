import { Styles, Theme } from '../../../../assets/global.styles'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	element: {
		display: 'flex',
		flex: 1,
		// backgroundColor: 'red',
		margin: 10,
		flexDirection: 'column',
	},
	img: {
		flex: 1,
		width: 50,
		height: 50,
	},
	brandsFitlerUnShow: {
		display: 'none',
	},
	brandsList: {
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		marginHorizontal: Styles.marginNPadding.xs,
	},
	headerText: {
		color: Theme.text[100],
		fontSize: Styles.fontSize.lg,
		marginHorizontal: Styles.marginNPadding.sm,
	},
	actionBar: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		flexDirection: 'row',
		marginHorizontal: Styles.marginNPadding.sm,
		paddingBottom: Styles.marginNPadding.sm,
	},
	footer: {
		margin: Styles.marginNPadding.md * 2,
	},
	spliter: {
		marginLeft: Styles.marginNPadding.sm,
	}
})
