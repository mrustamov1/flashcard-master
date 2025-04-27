# install dependencies
pnpm i


# link all the packages
cd ./packages

cd ./server
npm link

# run compilation
cd ../../
./node_modules/typescript/bin/tsc -b
