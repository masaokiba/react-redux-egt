import {useRouterHistory} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {basename} from '../universal/utils/basename';

export default useRouterHistory(createBrowserHistory)({basename: `/${basename}`});
