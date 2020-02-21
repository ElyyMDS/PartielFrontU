#!/bin/bash

# ---------------------- functions --------------------

function split_string () {

    # $1 is string
    # $2 is delimiter

    IFS=$2 # set delimiter
    read -ra splitArray <<< $1 # string is read into an array as tokens separated by IFS
    IFS=' ' # reset to default value after usage
    split_string_return=$splitArray
}

function array_to_pascal_case () {

    # $1 is array of string

    # Upper case each element of the array
    local array=("$@")
    local pascalCaseString=""
    for i in "${!array[@]}"; do # access each element of array
        local value="${array[$i]}"
        local upperCaseValue=$(tr '[:lower:]' '[:upper:]' <<< ${value:0:1})${value:1}
        pascalCaseString=${pascalCaseString}${upperCaseValue}
    done

    array_to_pascal_case_return=$pascalCaseString
}

function delimited_string_to_pascal_case () {
    local delimited_string=$1
    local delimiter=$2

    split_string $delimited_string $delimiter
    array_to_pascal_case ${split_string_return[@]}

    echo "$array_to_pascal_case_return"
}

# ---------------------- main code --------------------

# command : bash generate.sh [component, page, duck] name-of-element entity-name

elementType=$1
elementPath=$2
entityName=$3

# ask element type and path

declare -a elementTypeArray=("page" "component" "duck" "crud-duck")

while [[ ! " ${elementTypeArray[@]} " =~ " ${elementType} " ]]; do
    echo "Please specify an element type (page, component, duck)."
    read elementType
    echo ""
done

while [ -z $elementPath ]; do
    echo "Please specify a" $elementType "name (my-"$elementType"-name)."
    read elementPath
    echo ""
done

echo "generating" $elementType $elementPath "..."

# generate element

className="$(delimited_string_to_pascal_case $elementPath "-")"

if [ $elementType == 'page' ] || [ $elementType == 'component' ]; then # generate component or page

    # generate path and missing folders
    file=${elementType}s/$className/${elementPath}.js
    styleFile=${elementType}s/$className/${elementPath}.scss
    mkdir -p ${elementType}s/$className/

    # generate component / page file
    echo ""
    echo "generating" $file "..."
    touch $file

    echo "import React from 'react';"                                                               >> $file
    echo "import './"$elementPath."scss';"                                                          >> $file
    echo ""                                                                                         >> $file
    echo "const ${className} = () => {"                                                             >> $file
    echo "      return ("                                                                           >> $file
    echo "          <div className="\"${elementPath}\"">"                                           >> $file
    echo "              The ${className} ${elementType} works !"                                    >> $file
    echo "          </div>"                                                                         >> $file
    echo "      )"                                                                                  >> $file
    echo "}"                                                                                        >> $file 
    echo ""                                                                                         >> $file
    echo "export default ${className}"                                                              >> $file

    # generate style file
    echo "generating" $styleFile "..."
    touch $styleFile

    echo "${elementPath} {"                                                                         >> $styleFile
    echo ""                                                                                         >> $styleFile
    echo "}"                                                                                        >> $styleFile

elif [ $elementType == 'duck' ]; then # generate duck

    file=src/app/ducks/${elementPath}.duck.ts
    echo "generating" $file "..."

    echo "// --- Actions ---"                                                                           >> $file
    echo "const CHANGE_STATE = '/${elementPath}/CHANGE_STATE';"                                                >> $file
    echo "const RESET_STATE = '/${elementPath}/RESET_STATE';"                                                  >> $file
    echo ""                                                                                             >> $file
    echo "// --- Initial state ---"                                                                     >> $file
    echo "interface IINITIAL_STATE {"                                                                   >> $file
    echo ""                                                                                             >> $file
    echo "}"                                                                                            >> $file
    echo ""                                                                                             >> $file
    echo "const INITIAL_STATE: IINITIAL_STATE = {"                                                      >> $file
    echo ""                                                                                             >> $file
    echo "};"                                                                                           >> $file
    echo ""                                                                                             >> $file
    echo "// -- Reducer --"                                                                             >> $file
    echo "export default function reducer(state = INITIAL_STATE, { type, newState }: any) {"            >> $file
    echo "    switch (type) {"                                                                          >> $file
    echo "        case CHANGE_STATE: "                                                                  >> $file
    echo "        return { ...state, ...newState };"                                                    >> $file
    echo "        case RESET_STATE: "                                                                   >> $file
    echo "        return { ...state, ...INITIAL_STATE };"                                               >> $file
    echo "        default: "                                                                            >> $file
    echo "        return state"                                                                         >> $file
    echo "    }"                                                                                        >> $file
    echo "}"                                                                                            >> $file
    echo ""                                                                                             >> $file
    echo "// --- Action creators ---"                                                                   >> $file
    echo "export function changeState(newState: IINITIAL_STATE) { // for any change of the state"       >> $file
    echo "    return {"                                                                                 >> $file
    echo "        type: CHANGE_STATE,"                                                                  >> $file
    echo "        newState,"                                                                            >> $file
    echo "    }"                                                                                        >> $file
    echo "}"                                                                                            >> $file
    echo ""                                                                                             >> $file
    echo "export function resetState() { // to set the current state equal to the initial state"        >> $file
    echo "    return {"                                                                                 >> $file
    echo "        type: RESET_STATE,"                                                                   >> $file
    echo "    }"                                                                                        >> $file
    echo "}"   >> $file
    
elif [ $elementType == 'crud-duck' ]; then # generate crud duck                                                                                       
    echo "not available yet."
fi





if [ -z $styleFile ]; then
    echo echo "generating" $styleFile "..."
fi
