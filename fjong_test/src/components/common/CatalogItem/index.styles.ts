import { Dimensions, StyleSheet } from 'react-native'
import { Styles, Theme } from '../../../../assets/global.styles'

export const width = Dimensions.get('window').width
export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	element: {
		display: 'flex',
		borderRadius: Styles.radius.sm,
		flex: 1,
		flexShrink: 0,
		margin: Styles.marginNPadding.sm,
		flexDirection: 'column',
		backgroundColor: Theme.dominant[400],
		overflow: 'hidden',
	},
	img: {
		height: width * 0.85,
		width: width - Styles.marginNPadding.lg,
	},
	title: {
		marginTop: Styles.marginNPadding.sm,
		marginHorizontal: Styles.marginNPadding.sm,
		fontWeight: '500',
		fontSize: 20,
		lineHeight: 24,
		color: Theme.text[100],
	},
	description: {
		marginHorizontal: Styles.marginNPadding.sm,
		marginBottom: Styles.marginNPadding.sm,
		fontSize: 12,
		lineHeight: 16,
		color: Theme.text[100],
	},
	brandsList: {
		display: 'flex',
		flexDirection: 'row',
	},
	brand: {
		color: Theme.text[100],
		margin: Styles.marginNPadding.sm,
		marginRight: 0,
	},
	bottomBackgroud: {
		bottom: -0.2,
		left: 0,
		right: 0,
		paddingTop: 20,
		position: 'absolute',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	imageDotWrapper: {
		position: 'absolute',
		top: 10,
		left: 0,
		right: 0,
		zIndex: 1,
		height: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	imageDot: {
		padding: 3,
		borderRadius: 3,
		backgroundColor: `${Theme.text[100]}D9`,
		marginHorizontal: 5,
	},
	imageDotActive: {
		padding: 5,
		borderRadius: 5,
		backgroundColor: Theme.text[100],
	},
})
