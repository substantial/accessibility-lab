# shellcheck shell=bash
# shellcheck disable=SC2034
# WARNING: DO NOT MODIFY
# This file was generated by Subscript as part of the dev-setup package.
# Do not modify it directly. Instead, you may update the package in Subscript:
# 
# https://github.com/substantial/subscript/tree/master/packages/dev-setup
# 
# Then use "sub update dev-setup" to update this file.

BLACK='\033[30m'
CYAN='\033[36m'
GREEN='\033[32m'
MAGENTA='\033[35m'
WHITE='\033[37m'
BLUE='\033[34m'
DEFAULT='\033[0m'
RED='\033[31m'
YELLOW='\033[33m'

function warn {
  echo -e "${YELLOW}>> $1${DEFAULT}"
}

function error {
  echo -e "${RED}!! $1${DEFAULT}"
}

function info {
  echo -e "${BLUE}>> $1${DEFAULT}"
}

function cmd {
  command -v "$1" > /dev/null
}

function if-linux {
  if [ "$(uname -s)" == "Linux" ]; then
    "$@"
  fi
}

function if-osx {
  info "Deprecation warning"
  info "Replace usages of if-osx with if-macos"

  if [ "$(uname -s)" == "Darwin" ]; then
    "$@"
  fi
}

function if-macos {
  if [ "$(uname -s)" == "Darwin" ]; then
    "$@"
  fi
}

function brew-install {
  if ! cmd brew; then
    error "Please install homebrew and rerun, or manually install $1"
    echo "http://brew.sh/"
    exit 1
  fi

  brew install "$@"
}

function brew-cask-install {
  if ! cmd brew; then
    error "Please install homebrew and rerun, or manually install $1"
    echo "http://brew.sh/"
    exit 1
  fi

  brew cask install "$@"
}

function apt-install {
 sudo apt-get install "$@"
}

function install-package {
  info "Installing $*"

  if-linux apt-install "$@"
  if-macos brew-install "$@"
}
