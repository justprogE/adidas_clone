import { CurrentPath, LinkPath } from '../ui/paths';

export function getPaths(paths: string[]) {
  const arrPaths = [];
  for (let i = 0; i < paths.length; i += 1) {
    if (i === paths.length - 1) {
      arrPaths.push(<CurrentPath path={paths[i]} />);
    } else {
      arrPaths.push(<LinkPath path={paths[i]} />);
    }
  }
  return arrPaths;
}
