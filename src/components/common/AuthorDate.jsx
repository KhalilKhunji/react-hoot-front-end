const AuthorDate = ({name, date}) => {
    return(
        <p>
            {name} posted on&nbsp;
            {new Date(date).toLocaleDateString()}
        </p>
    );
};

export default AuthorDate;