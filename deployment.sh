# github commands
# echo "Pushing code files to github......"
# git add .
# echo "added files to the git clipboard waiting push.."
# echo "showing status of files added "
# git status
# echo "Please input the comment: "
# read comment
# echo "adding '$comment' to commit current repo....."
# git commit -m "$comment"
# echo "Pushing code to github branch 'master' "
# git push -u -f origin master 
# echo "Done with git hub..."

echo "switching to branch master"
git checkout master

echo "Building GnacofaAPP ....."
npm run build


echo "Deploying files to server"
scp -r build/* kwame@41.155.88.104:/var/www/forms-portal.gnacofa.org/

echo "All done here celebrate mate!!!...."