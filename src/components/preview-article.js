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
    ':firstOfType': {
        marginTop: '2vh',
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
        
        p:{
            paddingBottom: '2vh',
            textAlign: 'left',
        },
    },
    '.title a': {
        /* h3 */
        fontSize: '1.1em', 
        color: '#000',
        fontFamily: 'modern',
        cursor: 'pointer',
        textAlign: 'center',
        '[mq[0]]': {
            fontSize: '1.2em',
        },
    },
    '.author-span' : {
        color: '#a2aebf',
        fontFamily: 'lato',
        fontSize: '0.70em',
        padding: '1vh 0',
        '[mq[0]]': {
            fontSize: '1em',
        },
    }
}))

export default ArticleStyle;