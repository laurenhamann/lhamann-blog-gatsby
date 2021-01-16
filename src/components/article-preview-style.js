import styled from '@emotion/styled';
const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const ArticleStyle = styled.article(props => ({
	borderBottom: '1px solid #ddd',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-around',
	marginTop: '0',
	paddingBottom: '1%',
	[mq[1]]:{
		width: '80%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	'&:first-of-type': {
		marginTop: '2%',

	},
	'& a': {
		width: '30%',
		paddingRight: '1.5%',
	},
	'.article-div': {
		alignSelf: props.alignself,
		textAlign: 'left',
		display: 'flex',
		width: '70%',
		flexDirection: 'column',
		padding: '0 5%',
		p:{
			paddingBottom: '2%',
			textAlign: 'left',
		},
	},
	'.title': {
		width: 'auto',
	},
	'.title a': {
		fontSize: '2.5vmax', 
		color: '#000',
		fontFamily: 'modern',
		cursor: 'pointer',
		textAlign: 'center',
		width: 'auto',
		[mq[3]]: {
			fontSize: '30px'
		}
	},
	p:{
		width: 'auto',
	},
	'.author-span' : {
		color: '#a2aebf',
		fontFamily: 'lato',
		fontWeight: '300',
		fontStyle: 'italic',
		padding: '1% 0',
		width: 'auto',
	}

}))

export default ArticleStyle;