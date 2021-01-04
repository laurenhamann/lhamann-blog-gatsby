import styled from '@emotion/styled';

const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
		bp => `@media (min-width: ${bp}px)`
)

const ArticleStyle = styled.article(props => ({
	borderBottom: '1px solid #ddd',
	display: 'flex',
	flexDirection: 'row',
	marginTop: '0',
	paddingBottom: '1rem',
	width: '80vw',
	maxWidth: '500px',
	marginLeft: 'auto',
	marginRight: 'auto',
	[mq[1]]: {
		maxWidth: '700px',
	},
	[mq[2]]: {
		maxWidth: '1000px',
	},
	[mq[3]]: {
		maxWidth: '1200px',
	},
	'&:first-of-type': {
		marginTop: '2vh',
		[mq[0]]: {
			marginTop: '4vh',
		},
		[mq[3]]: {
			marginTop: '8vh',
		},
	},
	'& a': {
		width: '300px',
		flexGrow: 2,
		paddingRight: '1.5vh',
	},
	'.article-div': {
		alignSelf: props.alignself,
		textAlign: 'left',
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'column',
		[mq[0]]: {
			marginLeft: '4vw',
		},
		[mq[2]]: {
			marginLeft: '2vw',
		},
		[mq[3]]: {
			marginLeft: '8vw',
		},
		p:{
			paddingBottom: '2vh',
			textAlign: 'left',
			[mq[1]]: {
				fontSize: '1.3em',
			},
			[mq[2]]: {
				fontSize: '1.4em',
			},
			[mq[3]]: {
				fontSize: '1.7em',
			},
		},
	},
	'.title a': {
		fontSize: '1.1em', 
		color: '#000',
		fontFamily: 'modern',
		cursor: 'pointer',
		textAlign: 'center',
		[mq[0]]: {
			fontSize: '1.2em',
		},
		[mq[1]]: {
			fontSize: '1.5em',
		},
		[mq[2]]: {
			fontSize: '1.8em',
		},
		[mq[3]]: {
			fontSize: '2.1em',
		},
	},
	'.author-span' : {
		color: '#a2aebf',
		fontFamily: 'lato',
		fontSize: '0.70em',
		padding: '1vh 0',
		[mq[0]]: {
			fontSize: '1em',
		},
		[mq[1]]: {
			fontSize: '1.2em',
		}
	}

}))

export default ArticleStyle;